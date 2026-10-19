import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M11.95 6.53c1.31-.19 2.8.4 3.7 1.9.2.35.1.81-.26 1.03s-.82.1-1.03-.26c-.6-.99-1.5-1.28-2.19-1.18-.7.1-1.17.58-1.17 1.3v1.72h2c.41 0 .75.33.75.75 0 .41-.34.75-.75.75h-2v1.73c0 .48-.17.9-.39 1.23h4.89c.41 0 .75.34.75.75s-.34.75-.75.75h-7c-.36 0-.66-.25-.74-.6s.12-.7.45-.84l.04-.02.17-.09q.22-.1.5-.32.58-.46.58-.86v-1.73h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1V9.3c0-1.57 1.15-2.58 2.45-2.78" />
    </IconBase>
  ))
);

PoundSterlingCircleRegularDuotone.displayName = 'PoundSterlingCircleRegularDuotone';

// Triple export pattern
export { PoundSterlingCircleRegularDuotone, PoundSterlingCircleRegularDuotone as PoundSterlingCircleRegularDuotoneIcon, PoundSterlingCircleRegularDuotone as SiPoundSterlingCircleRegularDuotone };
export default PoundSterlingCircleRegularDuotone;
export type { PoundSterlingCircleRegularDuotoneProps };
