import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeRegularProps = Omit<IconBaseProps, 'children'>;

const TelescopeRegular = memo(
  forwardRef<SVGSVGElement, TelescopeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="telescope" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.13 2.6A2 2 0 0 1 20.58 4L22 9.33a2 2 0 0 1-1.41 2.45l-1.7.45c-.82.22-1.66.04-2.31-.42l-1.96.36a2.8 2.8 0 0 1-.77 2.86l2.82 5.63a.75.75 0 0 1-1.34.67L12.5 15.7a3 3 0 0 1-1.02 0l-2.82 5.63a.75.75 0 0 1-1.34-.67l2.82-5.63a2.7 2.7 0 0 1-.9-1.85l-4.28.8a2 2 0 0 1-2.3-1.45l-.43-1.63A2 2 0 0 1 3.5 8.5l11.14-3.92c.33-.73.97-1.3 1.8-1.53zM12 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M4 9.91a.5.5 0 0 0-.32.6l.44 1.63a.5.5 0 0 0 .58.36l2-.37-.77-2.9zm3.35-1.18.83 3.12 1.47-.27a2.75 2.75 0 0 1 4.02-.76l1.9-.35-.04-.17v-.02l-1.04-3.86v-.01l-.05-.17zm11.17-4.68-1.7.45c-.66.18-1.06.86-.88 1.53l1.04 3.87c.18.66.86 1.06 1.53.88l1.69-.45a.5.5 0 0 0 .35-.62l-1.42-5.3a.5.5 0 0 0-.61-.36" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeRegular.displayName = 'TelescopeRegular';

// Triple export pattern (lucide-react style)
export { TelescopeRegular, TelescopeRegular as TelescopeRegularIcon, TelescopeRegular as SiTelescopeRegular };
export default TelescopeRegular;
export type { TelescopeRegularProps };
