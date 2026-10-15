'use client';

import React, { useState, useMemo } from 'react';
import { Search, Clock } from 'lucide-react';
import { PLANTS, PLANT_CATEGORIES } from '@/data/plants';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export default function PlantGuideGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlants = useMemo(() => {
    return PLANTS.filter((plant) => {
      const matchesCategory =
        selectedCategory === 'all' || plant.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        plant.name.toLowerCase().includes(query) ||
        plant.culinaryUse.toLowerCase().includes(query) ||
        plant.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-8">
      {/* Controls Bar */}
      <div className="bg-white border border-border p-4 sm:p-6 rounded-sm shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {PLANT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                'text-xs font-medium px-3.5 py-1.5 rounded-full transition-all focus-visible:outline-forest',
                selectedCategory === cat.id
                  ? 'bg-forest text-white'
                  : 'bg-linen-light text-charcoal hover:bg-linen border border-border'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-muted" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search herbs, greens, uses..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-linen-light/60 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest transition-colors"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-charcoal-muted px-1">
        <span>
          Showing <strong>{filteredPlants.length}</strong> compatible varieties
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-forest hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredPlants.length === 0 ? (
        <div className="bg-white border border-border rounded-sm p-12 text-center text-charcoal-muted">
          <p className="text-base font-serif text-charcoal mb-1">No varieties found</p>
          <p className="text-xs">Try adjusting your category filter or search keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white border border-border rounded-sm p-6 flex flex-col justify-between hover:border-charcoal/40 transition-all shadow-xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="sage" size="sm">
                    {plant.category.replace('-', ' ')}
                  </Badge>
                  <span className="text-[11px] font-mono text-charcoal-muted">
                    {plant.difficulty}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-charcoal font-bold">{plant.name}</h3>
                {plant.scientificName && (
                  <div className="text-xs italic text-charcoal-muted/80 mb-3">
                    {plant.scientificName}
                  </div>
                )}

                <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                  {plant.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-border/60 text-xs">
                  <div>
                    <span className="font-semibold text-forest">Culinary Profile: </span>
                    <span className="text-charcoal-muted">{plant.culinaryUse}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between text-xs text-charcoal-muted">
                <span className="flex items-center gap-1 font-medium text-charcoal">
                  <Clock className="w-3.5 h-3.5 text-sage" /> {plant.harvestTimeDays}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-sage">
                  {plant.compatibleSystemSlugs.length} Systems
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
