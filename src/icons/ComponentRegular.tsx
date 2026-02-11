import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentRegularProps = Omit<IconBaseProps, 'children'>;

const ComponentRegular = memo(
  forwardRef<SVGSVGElement, ComponentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="component" {...props}>
      <path fillRule="evenodd" d="M10.76 14.18c.69-.69 1.8-.69 2.48 0l2.08 2.08c.69.69.69 1.8 0 2.48l-2.08 2.08c-.69.69-1.8.69-2.48 0l-2.08-2.08a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0l-2.08 2.08c-.1.1-.1.26 0 .36l2.08 2.08c.1.1.26.1.36 0l2.08-2.08c.1-.1.1-.26 0-.36zM5.26 8.68c.69-.69 1.8-.69 2.48 0l2.08 2.08c.69.69.69 1.8 0 2.48l-2.08 2.08c-.69.69-1.8.69-2.48 0l-2.08-2.08a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0l-2.08 2.08c-.1.1-.1.26 0 .36l2.08 2.08c.1.1.26.1.36 0l2.08-2.08c.1-.1.1-.26 0-.36zM16.26 8.68c.69-.69 1.8-.69 2.48 0l2.08 2.08c.69.69.69 1.8 0 2.48l-2.08 2.08c-.69.69-1.8.69-2.48 0l-2.08-2.08a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0l-2.08 2.08c-.1.1-.1.26 0 .36l2.08 2.08c.1.1.26.1.36 0l2.08-2.08c.1-.1.1-.26 0-.36zM10.76 3.18c.69-.69 1.8-.69 2.48 0l2.08 2.08c.69.69.69 1.8 0 2.48l-2.08 2.08c-.69.69-1.8.69-2.48 0L8.68 7.74a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0L9.74 6.32c-.1.1-.1.26 0 .36l2.08 2.08c.1.1.26.1.36 0l2.08-2.08c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

ComponentRegular.displayName = 'ComponentRegular';

// Triple export pattern (lucide-react style)
export { ComponentRegular, ComponentRegular as ComponentRegularIcon, ComponentRegular as SiComponentRegular };
export default ComponentRegular;
export type { ComponentRegularProps };
