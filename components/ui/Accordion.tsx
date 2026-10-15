'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  question?: string;
  answer?: string;
  title?: string;
  content?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('divide-y divide-border border-y border-border', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headingId = `accordion-heading-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="transition-colors hover:bg-black/[0.01]">
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full py-5 px-1 flex items-center justify-between text-left group gap-4 focus-visible:outline-forest"
              >
                <span className="font-serif text-lg md:text-xl text-charcoal group-hover:text-forest transition-colors">
                  {item.title || item.question}
                </span>
                <span
                  className={cn(
                    'flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-charcoal group-hover:border-forest group-hover:text-forest transition-transform duration-200',
                    isOpen && 'rotate-180 bg-forest text-white border-forest'
                  )}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={cn(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'max-h-96 opacity-100 pb-6 pt-1' : 'max-h-0 opacity-0 pb-0'
              )}
            >
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base pr-8">
                {item.content || item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
