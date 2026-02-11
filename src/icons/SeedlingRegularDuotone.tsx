import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SeedlingRegularDuotone = memo(
  forwardRef<SVGSVGElement, SeedlingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="seedling-duotone" {...props}>
      <path d="M2 7.25c2.96 0 5.54.99 6.9 2.34a3.75 3.75 0 0 1 .47 4.72l-1.1-1.1c.4-.84.26-1.87-.44-2.56-.9-.9-2.73-1.72-5.05-1.87.15 2.32.98 4.16 1.87 5.05.7.7 1.72.84 2.56.44l1.1 1.1c-1.46.97-3.44.8-4.72-.48C2.24 13.54 1.25 10.96 1.25 8v-.75zM22.74 4.02c0 2.53-.33 4.36-.88 5.78a9 9 0 0 1-2.17 3.23 4.75 4.75 0 0 1-5.95.63q.38-.65.89-1.22c1.25.77 2.91.62 4-.47a8 8 0 0 0 1.83-2.71c.42-1.07.7-2.48.76-4.48-2 .06-3.41.35-4.47.76a8 8 0 0 0-2.72 1.84 3.25 3.25 0 0 0-.46 4q-.54.59-.96 1.25a4.75 4.75 0 0 1 .36-6.32c.83-.82 1.8-1.6 3.23-2.16 1.42-.56 3.25-.88 5.79-.88h.75z" opacity={0.4} />
        <path d="M15.47 9.47a.75.75 0 1 1 1.06 1.06l-1.66 1.66a7.3 7.3 0 0 0-2.12 5.12V21a.75.75 0 0 1-.9.73.75.75 0 0 1-.6-.73v-1.34c0-.86-.34-1.7-.95-2.3l-4.33-4.33a.75.75 0 1 1 1.06-1.06l4.29 4.29a8.8 8.8 0 0 1 2.5-5.13z" />
    </IconBase>
  ))
);

SeedlingRegularDuotone.displayName = 'SeedlingRegularDuotone';

// Triple export pattern (lucide-react style)
export { SeedlingRegularDuotone, SeedlingRegularDuotone as SeedlingRegularDuotoneIcon, SeedlingRegularDuotone as SiSeedlingRegularDuotone };
export default SeedlingRegularDuotone;
export type { SeedlingRegularDuotoneProps };
