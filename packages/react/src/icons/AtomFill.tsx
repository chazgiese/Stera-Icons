import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtomFillProps = Omit<IconBaseProps, 'children'>;

const AtomFill = memo(
  forwardRef<SVGSVGElement, AtomFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M2.77 2.77C4.7.87 7.41 1.41 9.6 2.43q1.2.56 2.4 1.38 1.23-.82 2.42-1.38c2.18-1.02 4.9-1.57 6.82.34 1.9 1.92 1.36 4.65.35 6.82q-.57 1.2-1.4 2.4.83 1.23 1.4 2.42c1.01 2.18 1.56 4.9-.35 6.82-1.91 1.9-4.64 1.36-6.82.35Q13.2 21 12 20.18a18 18 0 0 1-2.4 1.4c-2.18 1.01-4.91 1.56-6.83-.35-1.9-1.91-1.36-4.64-.35-6.82Q3 13.2 3.82 12q-.83-1.21-1.4-2.4C1.41 7.41.86 4.68 2.77 2.76m2.99 11.76q-.36.6-.62 1.15c-.92 1.98-.7 2.97-.24 3.42.45.46 1.44.68 3.42-.24q.56-.27 1.15-.62a35 35 0 0 1-3.71-3.7m12.48 0a35 35 0 0 1-3.7 3.71q.58.35 1.14.62c1.98.92 2.97.7 3.42.24.46-.45.68-1.44-.24-3.42q-.26-.56-.62-1.15M12 7.55A31 31 0 0 0 7.55 12 31 31 0 0 0 12 16.45 31 31 0 0 0 16.45 12 31 31 0 0 0 12 7.55m7.1-2.65c-.45-.46-1.44-.68-3.42.24q-.56.27-1.15.62a35 35 0 0 1 3.71 3.7q.36-.58.62-1.14c.92-1.98.7-2.97.24-3.42m-10.78.24c-1.98-.92-2.97-.7-3.42-.24-.46.45-.68 1.44.24 3.42q.26.56.62 1.15a35 35 0 0 1 3.7-3.71q-.58-.36-1.14-.62" clipRule="evenodd" />
    </IconBase>
  ))
);

AtomFill.displayName = 'AtomFill';

// Triple export pattern (lucide-react style)
export { AtomFill, AtomFill as AtomFillIcon, AtomFill as SiAtomFill };
export type { AtomFillProps };
