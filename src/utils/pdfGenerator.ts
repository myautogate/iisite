import jsPDF from 'jspdf';
import { CalculatorItem } from '../types/pricing';

interface Totals {
  cost: number;
  msrp: number;
  installationTime: number;
}

const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

export const generatePDF = (
  items: CalculatorItem[],
  totals: Totals,
  type: 'dealer' | 'customer'
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  let y = 20;

  // Header
  doc.setFontSize(20);
  doc.text('Invisible Intercom Quote', pageWidth / 2, y, { align: 'center' });
  y += 15;

  doc.setFontSize(12);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, y);
  y += 15;

  // Group items by category
  const categories = ['controller', 'cellular', 'sign', 'subscription'] as const;
  
  categories.forEach(category => {
    const categoryItems = items.filter(item => item.category === category);
    if (categoryItems.length === 0) return;

    // Category header
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(category.charAt(0).toUpperCase() + category.slice(1), margin, y);
    y += 10;

    // Table header
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    const headers = ['Item', 'Qty', type === 'dealer' ? 'Cost' : '', 'MSRP', 'Install Time'];
    const colWidths = [80, 20, type === 'dealer' ? 25 : 0, 25, 30];
    
    let x = margin;
    headers.forEach((header, i) => {
      if (colWidths[i] > 0) {
        doc.text(header, x, y);
        x += colWidths[i];
      }
    });
    y += 5;

    // Items
    categoryItems.forEach(item => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      x = margin;
      const values = [
        item.name,
        item.quantity.toString(),
        type === 'dealer' ? formatCurrency(item.cost * item.quantity) : '',
        formatCurrency(item.msrp * item.quantity),
        `${(item.installationTime * item.quantity).toFixed(1)}hr`
      ];

      values.forEach((value, i) => {
        if (colWidths[i] > 0) {
          if (i === 0) {
            doc.setFontSize(9);
            const lines = doc.splitTextToSize(value, colWidths[i] - 5);
            doc.text(lines, x, y);
            y += (lines.length - 1) * 5;
          } else {
            doc.setFontSize(10);
            doc.text(value, x, y);
          }
          x += colWidths[i];
        }
      });
      y += 7;
    });
    y += 5;
  });

  // Totals
  y += 5;
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Totals:', margin, y);
  y += 7;

  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  if (type === 'dealer') {
    doc.text(`Total Cost: ${formatCurrency(totals.cost)}`, margin, y);
    y += 5;
  }
  doc.text(`Total MSRP: ${formatCurrency(totals.msrp)}`, margin, y);
  y += 5;
  doc.text(`Total Installation Time: ${totals.installationTime.toFixed(1)} hours`, margin, y);

  // Footer
  y = doc.internal.pageSize.height - 20;
  doc.setFontSize(8);
  doc.setTextColor(128);
  doc.text('This quote is valid for 30 days from the date shown above.', margin, y);

  // Save the PDF
  const filename = `invisible-intercom-quote-${type}-${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(filename);
};