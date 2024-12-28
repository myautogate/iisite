import React, { useState } from 'react';
import { Upload, Trash2, FileText } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: Date;
}

export default function ResourceManager() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach(file => {
      const newResource: Resource = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        uploadDate: new Date()
      };
      setResources(prev => [...prev, newResource]);
    });
  };

  const handleDelete = (id: string) => {
    setResources(prev => prev.filter(resource => resource.id !== id));
  };

  return (
    <div className="space-y-8">
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition ${
          dragActive ? 'border-black bg-gray-50' : 'border-gray-300'
        }`}
      >
        <Upload className="w-8 h-8 mx-auto mb-4 text-gray-400" />
        <p className="text-gray-600">
          Drag and drop files here, or{' '}
          <label className="text-black cursor-pointer hover:underline">
            browse
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
            />
          </label>
        </p>
      </div>

      <div className="space-y-4">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-4">
              <FileText className="w-6 h-6 text-gray-400" />
              <div>
                <p className="font-medium">{resource.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(resource.uploadDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(resource.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}