import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ComponentBoldProps = Omit<IconBaseProps, 'children'>;

const ComponentBold = memo(
  forwardRef<SVGSVGElement, ComponentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="component-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.59 14a2 2 0 0 1 2.82 0l2.09 2.09a2 2 0 0 1 0 2.82L13.41 21a2 2 0 0 1-2.82 0L8.5 18.91a2 2 0 0 1 0-2.82zm-.68 3.5L12 19.59l2.09-2.09L12 15.41zM5.09 8.5a2 2 0 0 1 2.82 0L10 10.59a2 2 0 0 1 0 2.82L7.91 15.5a2 2 0 0 1-2.82 0L3 13.41a2 2 0 0 1 0-2.82zM4.4 12l2.09 2.09L8.59 12 6.5 9.91zM16.09 8.5a2 2 0 0 1 2.82 0L21 10.59a2 2 0 0 1 0 2.82l-2.09 2.09a2 2 0 0 1-2.82 0L14 13.41a2 2 0 0 1 0-2.82zM15.4 12l2.09 2.09L19.59 12 17.5 9.91zM10.59 3a2 2 0 0 1 2.82 0l2.09 2.09a2 2 0 0 1 0 2.82L13.41 10a2 2 0 0 1-2.82 0L8.5 7.91a2 2 0 0 1 0-2.82zM9.9 6.5 12 8.59l2.09-2.09L12 4.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ComponentBold.displayName = 'ComponentBold';

// Triple export pattern (lucide-react style)
export { ComponentBold, ComponentBold as ComponentBoldIcon, ComponentBold as SiComponentBold };
export default ComponentBold;
export type { ComponentBoldProps };
