import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ComponentBoldProps = Omit<IconBaseProps, 'children'>;

const ComponentBold = memo(
  forwardRef<SVGSVGElement, ComponentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="component-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.59 14a2 2 0 0 1 2.82 0L16 16.59a2 2 0 0 1 0 2.82L13.41 22a2 2 0 0 1-2.82 0L8 19.41a2 2 0 0 1 0-2.82zM9.4 18 12 20.59 14.59 18 12 15.41zM4.59 8A2 2 0 0 1 7.4 8L10 10.59a2 2 0 0 1 0 2.82L7.41 16a2 2 0 0 1-2.82 0L2 13.41a2 2 0 0 1 0-2.82zM3.4 12 6 14.59 8.59 12 6 9.41zM16.59 8a2 2 0 0 1 2.82 0L22 10.59a2 2 0 0 1 0 2.82L19.41 16a2 2 0 0 1-2.82 0L14 13.41a2 2 0 0 1 0-2.82zm-1.18 4L18 14.59 20.59 12 18 9.41zM10.59 2a2 2 0 0 1 2.82 0L16 4.59a2 2 0 0 1 0 2.82L13.41 10a2 2 0 0 1-2.82 0L8 7.41A2 2 0 0 1 8 4.6zM9.4 6 12 8.59 14.59 6 12 3.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ComponentBold.displayName = 'ComponentBold';

// Triple export pattern (lucide-react style)
export { ComponentBold, ComponentBold as ComponentBoldIcon, ComponentBold as SiComponentBold };
export default ComponentBold;
export type { ComponentBoldProps };
