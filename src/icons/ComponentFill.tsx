import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentFillProps = Omit<IconBaseProps, 'children'>;

const ComponentFill = memo(
  forwardRef<SVGSVGElement, ComponentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="component-fill" {...props}>
      <path fill="currentColor" d="M10.76 14.18c.69-.69 1.8-.69 2.48 0l2.58 2.58c.69.69.69 1.8 0 2.48l-2.58 2.58c-.69.69-1.8.69-2.48 0l-2.58-2.58a1.75 1.75 0 0 1 0-2.48zM4.76 8.18c.69-.69 1.8-.69 2.48 0l2.58 2.58c.69.69.69 1.8 0 2.48l-2.58 2.58c-.69.69-1.8.69-2.48 0l-2.58-2.58a1.75 1.75 0 0 1 0-2.48zM16.76 8.18c.69-.69 1.8-.69 2.48 0l2.58 2.58c.69.69.69 1.8 0 2.48l-2.58 2.58c-.69.69-1.8.69-2.48 0l-2.58-2.58a1.75 1.75 0 0 1 0-2.48zM10.76 2.18c.69-.69 1.8-.69 2.48 0l2.58 2.58c.69.69.69 1.8 0 2.48l-2.58 2.58c-.69.69-1.8.69-2.48 0L8.18 7.24a1.75 1.75 0 0 1 0-2.48z" />
    </IconBase>
  ))
);

ComponentFill.displayName = 'ComponentFill';

// Triple export pattern (lucide-react style)
export { ComponentFill, ComponentFill as ComponentFillIcon, ComponentFill as SiComponentFill };
export default ComponentFill;
export type { ComponentFillProps };
