import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtomBoldProps = Omit<IconBaseProps, 'children'>;

const AtomBold = memo(
  forwardRef<SVGSVGElement, AtomBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M3.13 3.13c1.67-1.67 4.1-1.25 6.25-.25A18 18 0 0 1 12 4.42a18 18 0 0 1 2.62-1.54c2.14-1 4.58-1.42 6.25.25s1.26 4.1.25 6.25A18 18 0 0 1 19.58 12a18 18 0 0 1 1.54 2.62c1 2.14 1.42 4.58-.25 6.25s-4.1 1.26-6.25.25A18 18 0 0 1 12 19.58a18 18 0 0 1-2.62 1.54c-2.14 1-4.58 1.42-6.25-.25s-1.25-4.1-.25-6.25A18 18 0 0 1 4.42 12a18 18 0 0 1-1.54-2.62c-1-2.14-1.42-4.58.25-6.25m2.56 10.55q-.6.92-1 1.79c-.94 2.01-.85 3.29-.15 3.99s1.98.8 4-.15q.86-.4 1.78-1a34 34 0 0 1-4.63-4.63m12.61 0a34 34 0 0 1-4.62 4.62q.92.6 1.79 1.01c2.01.94 3.29.85 3.99.15s.8-1.98-.15-4q-.4-.86-1-1.78M12 6.91A31 31 0 0 0 6.9 12a31 31 0 0 0 5.1 5.1 31 31 0 0 0 5.1-5.1A31 31 0 0 0 12 6.9M8.53 4.69c-2.01-.94-3.29-.85-3.99-.15s-.8 1.98.15 4q.4.86 1 1.78a34 34 0 0 1 4.63-4.63q-.92-.6-1.79-1m10.93-.15c-.7-.7-1.98-.8-4 .15q-.86.4-1.78 1a34 34 0 0 1 4.62 4.63q.6-.92 1.01-1.79c.94-2.01.85-3.29.15-3.99" clipRule="evenodd" />
    </IconBase>
  ))
);

AtomBold.displayName = 'AtomBold';

export { AtomBold };
export type { AtomBoldProps };
