import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ComponentFillDuotone = memo(
  forwardRef<SVGSVGElement, ComponentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.8 8.5c.38-.39 1.02-.39 1.4 0l2.8 2.8c.39.38.39 1.02 0 1.4l-2.8 2.8c-.38.39-1.02.39-1.4 0L3 12.7c-.4-.38-.4-1.02 0-1.4zM16.8 8.5c.38-.39 1.02-.39 1.4 0l2.8 2.8c.39.38.39 1.02 0 1.4l-2.8 2.8c-.38.39-1.02.39-1.4 0L14 12.7c-.4-.38-.4-1.02 0-1.4z" opacity={0.4} />
        <path d="M11.3 14c.38-.39 1.02-.39 1.4 0l2.8 2.8c.39.38.39 1.02 0 1.4L12.7 21c-.38.4-1.02.39-1.4 0l-2.8-2.8c-.4-.38-.4-1.02 0-1.4zM11.3 3c.38-.39 1.02-.39 1.4 0l2.8 2.8c.39.38.39 1.02 0 1.4L12.7 10c-.38.4-1.02.39-1.4 0L8.5 7.2c-.4-.38-.4-1.02 0-1.4z" />
    </IconBase>
  ))
);

ComponentFillDuotone.displayName = 'ComponentFillDuotone';

// Triple export pattern
export { ComponentFillDuotone, ComponentFillDuotone as ComponentFillDuotoneIcon, ComponentFillDuotone as SiComponentFillDuotone };
export default ComponentFillDuotone;
export type { ComponentFillDuotoneProps };
