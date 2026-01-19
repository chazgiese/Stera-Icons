import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrophyFillProps = Omit<IconBaseProps, 'children'>;

const TrophyFill = memo(
  forwardRef<SVGSVGElement, TrophyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trophy-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1.25c1.35 0 2.47.97 2.71 2.25h2.31a2.25 2.25 0 0 1 2.22 2.62l-.45 2.72a5 5 0 0 1-2.36 3.47l-2.92 1.75-.15.07a21 21 0 0 1-1.63 3.33c1.47.5 2.52 1.9 2.52 3.54v1c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75v-1a3.75 3.75 0 0 1 2.52-3.54 21 21 0 0 1-1.63-3.33l-.15-.07-2.92-1.75A5 5 0 0 1 1.7 8.84l-.45-2.72A2.25 2.25 0 0 1 3.48 3.5h2.3A2.8 2.8 0 0 1 8.5 1.25zm2.77 4.25c-.02 1.87-.12 3.8-.56 5.81l1.2-.72a3 3 0 0 0 1.4-2.08l.46-2.72a.25.25 0 0 0-.25-.29zm-14.8 0a.25.25 0 0 0-.24.3l.45 2.71A3 3 0 0 0 5.1 10.6l1.2.72a28 28 0 0 1-.57-5.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyFill.displayName = 'TrophyFill';

// Triple export pattern (lucide-react style)
export { TrophyFill, TrophyFill as TrophyFillIcon, TrophyFill as SiTrophyFill };
export type { TrophyFillProps };
