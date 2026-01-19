import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoonStarRegularProps = Omit<IconBaseProps, 'children'>;

const MoonStarRegular = memo(
  forwardRef<SVGSVGElement, MoonStarRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-star" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.9 1.7a.75.75 0 0 1 .88 1.07 9.25 9.25 0 0 0 10.9 13.09.75.75 0 0 1 .88 1.06A10.75 10.75 0 1 1 8.89 1.7M7.73 3.8a9.25 9.25 0 1 0 11.24 14.28l.32-.4A10.74 10.74 0 0 1 7.63 4.17z" clipRule="evenodd" />
        <path fill="currentColor" d="M18.21 1.94a.3.3 0 0 1 .58 0l.14.47a4 4 0 0 0 2.66 2.66l.47.14a.3.3 0 0 1 0 .58l-.47.14a4 4 0 0 0-2.66 2.66l-.14.47a.3.3 0 0 1-.58 0l-.14-.47a4 4 0 0 0-2.66-2.66l-.47-.14c-.28-.09-.28-.49 0-.58l.47-.14a4 4 0 0 0 2.66-2.66z" />
    </IconBase>
  ))
);

MoonStarRegular.displayName = 'MoonStarRegular';

// Triple export pattern (lucide-react style)
export { MoonStarRegular, MoonStarRegular as MoonStarRegularIcon, MoonStarRegular as SiMoonStarRegular };
export type { MoonStarRegularProps };
