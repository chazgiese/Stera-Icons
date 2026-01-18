import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SeedlingBoldProps = Omit<IconBaseProps, 'children'>;

const SeedlingBold = memo(
  forwardRef<SVGSVGElement, SeedlingBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22.99 4.02c0 2.55-.33 4.41-.9 5.87a9 9 0 0 1-2.23 3.32 5 5 0 0 1-6.03.8 7 7 0 0 0-.83 3.3V21a1 1 0 1 1-2 0v-1.34a3 3 0 0 0-.88-2.12l-1.85-1.85a4 4 0 0 1-4.86-.62C2.01 13.66 1 11.01 1 8V7h1c3.01 0 5.66 1 7.07 2.41a4 4 0 0 1 .62 4.87l1.45 1.45a9 9 0 0 1 1.17-3.09 5 5 0 0 1 .48-6.5 9 9 0 0 1 3.32-2.23c1.46-.57 3.32-.9 5.88-.9h1zM3.05 9.05c.2 2.14.97 3.8 1.78 4.6a2 2 0 0 0 1.93.52l-.97-.96a1 1 0 1 1 1.42-1.42l.96.97a2 2 0 0 0-.51-1.93c-.8-.8-2.47-1.58-4.61-1.78m17.91-4.01c-1.84.07-3.14.35-4.12.74a7 7 0 0 0-2.63 1.77 3 3 0 0 0-.59 3.41L15.3 9.3a1 1 0 1 1 1.42 1.42l-1.67 1.67a3 3 0 0 0 3.4-.59 7 7 0 0 0 1.79-2.63c.38-.98.66-2.28.73-4.12" clipRule="evenodd" />
    </IconBase>
  ))
);

SeedlingBold.displayName = 'SeedlingBold';

// Triple export pattern (lucide-react style)
export { SeedlingBold, SeedlingBold as SeedlingBoldIcon, SeedlingBold as SiSeedlingBold };
export type { SeedlingBoldProps };
