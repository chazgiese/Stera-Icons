import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrophyFillProps = Omit<IconBaseProps, 'children'>;

const TrophyFill = memo(
  forwardRef<SVGSVGElement, TrophyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trophy-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.15 2.25c1.3 0 2.39.98 2.54 2.25h1.98a1.88 1.88 0 0 1 1.85 2.18l-.4 2.45a4.4 4.4 0 0 1-2.06 3.02l-2.5 1.5a19 19 0 0 1-1.54 3.22c1.3.5 2.23 1.75 2.23 3.23v.9c0 .41-.34.75-.75.75h-9a.75.75 0 0 1-.75-.75v-.9c0-1.48.93-2.74 2.23-3.23a19 19 0 0 1-1.53-3.22l-2.51-1.5a4.4 4.4 0 0 1-2.05-3.02l-.41-2.45A1.88 1.88 0 0 1 4.33 4.5H6.3a2.6 2.6 0 0 1 2.54-2.25zM4.33 6c-.23 0-.4.2-.37.44l.4 2.45c.14.82.64 1.54 1.35 1.97l1.11.67A25 25 0 0 1 6.3 6zm13.39 0c-.01 1.77-.1 3.6-.54 5.53l1.1-.67a2.9 2.9 0 0 0 1.35-1.97l.41-2.45a.4.4 0 0 0-.37-.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyFill.displayName = 'TrophyFill';

// Triple export pattern (lucide-react style)
export { TrophyFill, TrophyFill as TrophyFillIcon, TrophyFill as SiTrophyFill };
export default TrophyFill;
export type { TrophyFillProps };
