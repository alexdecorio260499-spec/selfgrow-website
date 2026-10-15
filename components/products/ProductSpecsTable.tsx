import React from 'react';
import { Product } from '@/types';
import { Check } from 'lucide-react';

interface ProductSpecsTableProps {
  product: Product;
}

export default function ProductSpecsTable({ product }: ProductSpecsTableProps) {
  const specRows = [
    { label: 'Model Identifier', value: product.modelIdentifier },
    { label: 'System Category', value: product.categoryLabel },
    { label: 'Cultivation Capacity', value: `${product.growingCapacity} ${product.growingCapacityUnit}` },
    { label: 'Physical Dimensions', value: product.dimensions.formatted },
    { label: 'Water Reservoir', value: product.waterCapacity },
    { label: 'Water Autonomy', value: product.waterAutonomy },
    { label: 'Energy Consumption', value: product.powerConsumption },
    {
      label: 'Lighting System',
      value: `${product.lighting.ledCount ? `${product.lighting.ledCount} LEDs — ` : ''}${product.lighting.type}`,
    },
    { label: 'Control Method', value: product.controlMethod },
    { label: 'Enclosure Material', value: product.enclosureMaterial },
    { label: 'Maintenance Schedule', value: product.maintenanceInterval },
    { label: 'Warranty & Support', value: product.warranty },
    { label: 'Availability', value: product.availability },
  ];

  return (
    <div className="bg-white border border-border rounded-sm overflow-hidden">
      <div className="p-6 border-b border-border bg-linen-light/50 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-xl text-charcoal">Verified Specifications</h3>
          <p className="text-xs text-charcoal-muted mt-0.5">
            Lab-tested specifications for the {product.name} ({product.modelIdentifier}).
          </p>
        </div>
        <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 bg-sprout/60 text-forest border border-sprout rounded">
          Verified Specs
        </span>
      </div>

      <div className="divide-y divide-border/60">
        {specRows.map((row, idx) => (
          <div
            key={row.label}
            className={`grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-6 text-sm ${
              idx % 2 === 0 ? 'bg-white' : 'bg-linen-light/20'
            }`}
          >
            <span className="font-medium text-charcoal-muted sm:col-span-1">
              {row.label}
            </span>
            <span className="text-charcoal sm:col-span-2 mt-1 sm:mt-0 font-normal">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Supported Plants Section */}
      <div className="p-6 border-t border-border bg-linen-light/30">
        <h4 className="text-xs uppercase tracking-wider font-semibold text-forest mb-3">
          Compatible Crops & Plants
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {product.supportedPlants.map((plant) => (
            <div
              key={plant}
              className="flex items-center gap-2 text-xs text-charcoal p-2 bg-white border border-border rounded-xs"
            >
              <Check className="w-3.5 h-3.5 text-sage flex-shrink-0" />
              <span className="truncate">{plant}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
