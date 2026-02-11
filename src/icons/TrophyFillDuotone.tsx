import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrophyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrophyFillDuotone = memo(
  forwardRef<SVGSVGElement, TrophyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trophy-fill-duotone" {...props}>
      <path d="m13.8 16.65.3.01a3.45 3.45 0 0 1 3.15 3.44v.9c0 .41-.34.75-.75.75h-9a.75.75 0 0 1-.75-.75v-.9a3.45 3.45 0 0 1 3.45-3.45zM19.67 4.5a1.88 1.88 0 0 1 1.85 2.18l-.4 2.45a4.4 4.4 0 0 1-2.06 3.02l-2.5 1.5q.39-1.08.62-2.12l1.11-.67a2.9 2.9 0 0 0 1.34-1.97l.41-2.45a.4.4 0 0 0-.37-.44h-1.95l-.03-1.5zM6.3 4.5l-.01.3V6H4.32c-.23 0-.4.2-.37.44l.4 2.45c.15.82.64 1.54 1.35 1.97l1.11.67q.24 1.04.62 2.12l-2.5-1.5A4.4 4.4 0 0 1 2.9 9.13l-.41-2.45A1.88 1.88 0 0 1 4.33 4.5z" opacity={0.4} />
        <path d="M15.15 2.25c1.4 0 2.55 1.14 2.56 2.54.04 3.7-.03 7.6-2.7 12.08a3 3 0 0 0-1.21-.22h-3.6q-.65 0-1.22.22C6.32 12.4 6.25 8.48 6.28 4.8a2.57 2.57 0 0 1 2.57-2.54z" />
    </IconBase>
  ))
);

TrophyFillDuotone.displayName = 'TrophyFillDuotone';

// Triple export pattern (lucide-react style)
export { TrophyFillDuotone, TrophyFillDuotone as TrophyFillDuotoneIcon, TrophyFillDuotone as SiTrophyFillDuotone };
export default TrophyFillDuotone;
export type { TrophyFillDuotoneProps };
