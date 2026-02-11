import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ComponentFillDuotone = memo(
  forwardRef<SVGSVGElement, ComponentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="component-fill-duotone" {...props}>
      <path d="M5.26 8.68c.69-.69 1.8-.69 2.48 0l2.08 2.08c.69.69.69 1.8 0 2.48l-2.08 2.08c-.69.69-1.8.69-2.48 0l-2.08-2.08a1.75 1.75 0 0 1 0-2.48zM16.26 8.68c.69-.69 1.8-.69 2.48 0l2.08 2.08c.69.69.69 1.8 0 2.48l-2.08 2.08c-.69.69-1.8.69-2.48 0l-2.08-2.08a1.75 1.75 0 0 1 0-2.48z" opacity={0.4} />
        <path d="M10.76 14.18c.69-.69 1.8-.69 2.48 0l2.08 2.08c.69.69.69 1.8 0 2.48l-2.08 2.08c-.69.69-1.8.69-2.48 0l-2.08-2.08a1.75 1.75 0 0 1 0-2.48zM10.76 3.18c.69-.69 1.8-.69 2.48 0l2.08 2.08c.69.69.69 1.8 0 2.48l-2.08 2.08c-.69.69-1.8.69-2.48 0L8.68 7.74a1.75 1.75 0 0 1 0-2.48z" />
    </IconBase>
  ))
);

ComponentFillDuotone.displayName = 'ComponentFillDuotone';

// Triple export pattern (lucide-react style)
export { ComponentFillDuotone, ComponentFillDuotone as ComponentFillDuotoneIcon, ComponentFillDuotone as SiComponentFillDuotone };
export default ComponentFillDuotone;
export type { ComponentFillDuotoneProps };
