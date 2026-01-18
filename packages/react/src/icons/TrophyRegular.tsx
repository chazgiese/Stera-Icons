import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrophyRegularProps = Omit<IconBaseProps, 'children'>;

const TrophyRegular = memo(
  forwardRef<SVGSVGElement, TrophyRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1.25c1.43 0 2.62 1.1 2.75 2.5h2.27a2 2 0 0 1 1.98 2.33l-.46 2.72a4.8 4.8 0 0 1-2.24 3.3L17 13.77q-.65 1.78-1.77 3.68c1.47.5 2.52 1.9 2.52 3.54v1c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75v-1a3.75 3.75 0 0 1 2.52-3.54A21 21 0 0 1 7 13.78L4.2 12.09A4.8 4.8 0 0 1 1.96 8.8L1.5 6.08a2 2 0 0 1 1.98-2.33h2.27a2.77 2.77 0 0 1 2.75-2.5zM10 18.75c-1.24 0-2.25 1-2.25 2.25v.25h8.5V21c0-1.24-1-2.25-2.25-2.25zm-1.5-16c-.7 0-1.26.56-1.27 1.26-.03 4.22.05 8.38 3.18 13.24h3.18c3.13-4.86 3.21-9.02 3.18-13.24-.01-.7-.58-1.26-1.27-1.26zm-5.02 2.5a.5.5 0 0 0-.5.58l.46 2.72c.15.94.71 1.77 1.53 2.26l1.4.84a27 27 0 0 1-.64-6.4zm14.79 0c0 2.05-.11 4.17-.64 6.4l1.4-.84a3.3 3.3 0 0 0 1.53-2.26l.46-2.72a.5.5 0 0 0-.5-.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyRegular.displayName = 'TrophyRegular';

export { TrophyRegular };
export type { TrophyRegularProps };
