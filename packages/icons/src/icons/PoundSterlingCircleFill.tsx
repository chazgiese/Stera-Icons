import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleFillProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleFill = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m3.75 6.61c-.93-1.53-2.45-2.15-3.82-1.95-1.35.2-2.55 1.26-2.55 2.9v1.6H8.5c-.48 0-.87.4-.87.88s.39.87.87.87h.88v1.6q.02.31-.54.77-.27.2-.48.32l-.16.08-.04.01c-.39.17-.6.58-.52.98.09.41.44.7.86.7h7c.48 0 .88-.39.88-.87s-.4-.87-.88-.87h-4.67c.17-.32.3-.69.3-1.11v-1.6H13c.48 0 .88-.4.88-.88s-.4-.88-.88-.88h-1.87v-1.6c0-.64.42-1.07 1.06-1.17s1.49.18 2.06 1.13c.25.41.79.54 1.2.3.42-.26.55-.8.3-1.2" clipRule="evenodd" />
    </IconBase>
  ))
);

PoundSterlingCircleFill.displayName = 'PoundSterlingCircleFill';

// Triple export pattern
export { PoundSterlingCircleFill, PoundSterlingCircleFill as PoundSterlingCircleFillIcon, PoundSterlingCircleFill as SiPoundSterlingCircleFill };
export default PoundSterlingCircleFill;
export type { PoundSterlingCircleFillProps };
