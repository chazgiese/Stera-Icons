import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomFillDuotone = memo(
  forwardRef<SVGSVGElement, AtomFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.54 4.54c.52-.52 1.33-.7 2.57-.38.95.25 2.05.78 3.2 1.53Q9.08 6.73 7.9 7.9A1 1 0 0 0 9.3 9.32a24 24 0 0 1 6.16-4.62c2.01-.94 3.29-.85 3.99-.15.52.52.7 1.33.38 2.57-.25.95-.78 2.05-1.54 3.2a34 34 0 0 0-2.2-2.41A1 1 0 0 0 14.7 9.3a24 24 0 0 1 4.62 6.16c.94 2.01.85 3.29.15 3.99-.52.52-1.33.7-2.57.38-.95-.25-2.05-.78-3.2-1.54q1.24-1.02 2.41-2.2a1 1 0 0 0-1.41-1.41 24 24 0 0 1-6.16 4.62c-2.01.94-3.29.85-3.99.15-.52-.52-.7-1.33-.38-2.57.25-.95.78-2.05 1.54-3.2q1.02 1.24 2.2 2.41A1 1 0 0 0 9.3 14.7 24 24 0 0 1 4.7 8.53c-.94-2.01-.85-3.29-.15-3.99M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M14.62 2.88c2.14-1 4.58-1.42 6.25.25 1.23 1.22 1.33 2.89.9 4.49A14 14 0 0 1 19.58 12a18 18 0 0 1 1.54 2.62c1 2.14 1.42 4.58-.25 6.25-1.22 1.23-2.89 1.32-4.49.9A14 14 0 0 1 12 19.58a18 18 0 0 1-2.62 1.54c-2.14 1-4.58 1.42-6.25-.25-1.23-1.22-1.32-2.89-.9-4.49.37-1.4 1.16-2.9 2.19-4.38a18 18 0 0 1-1.54-2.62c-1-2.14-1.42-4.58.25-6.25 1.22-1.23 2.89-1.32 4.49-.9 1.4.37 2.9 1.16 4.38 2.19a18 18 0 0 1 2.62-1.54m-7.5 1.28c-1.25-.33-2.06-.14-2.58.38-.7.7-.8 1.98.15 4 .9 1.93 2.6 4.13 4.62 6.15A1 1 0 0 1 7.9 16.1q-1.17-1.16-2.2-2.42a12 12 0 0 0-1.54 3.21c-.33 1.24-.14 2.05.38 2.57.7.7 1.98.8 4-.15 1.93-.9 4.13-2.6 6.15-4.62a1 1 0 1 1 1.41 1.41q-1.16 1.18-2.42 2.2c1.16.76 2.26 1.29 3.21 1.54 1.24.33 2.05.14 2.57-.38.7-.7.8-1.98-.15-4-.9-1.93-2.6-4.13-4.62-6.15A1 1 0 1 1 16.1 7.9q1.18 1.17 2.2 2.42a12 12 0 0 0 1.54-3.2c.33-1.25.14-2.06-.38-2.58-.7-.7-1.98-.8-4 .15-1.93.9-4.13 2.6-6.15 4.62A1 1 0 0 1 7.9 7.9q1.16-1.17 2.42-2.2a12 12 0 0 0-3.2-1.54" clipRule="evenodd" />
    </IconBase>
  ))
);

AtomFillDuotone.displayName = 'AtomFillDuotone';

// Triple export pattern (lucide-react style)
export { AtomFillDuotone, AtomFillDuotone as AtomFillDuotoneIcon, AtomFillDuotone as SiAtomFillDuotone };
export default AtomFillDuotone;
export type { AtomFillDuotoneProps };
