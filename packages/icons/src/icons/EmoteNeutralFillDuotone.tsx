import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M8.5 14.13c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zM9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 14.13c.48 0 .88.39.88.87s-.4.88-.88.88h-7c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteNeutralFillDuotone.displayName = 'EmoteNeutralFillDuotone';

// Triple export pattern
export { EmoteNeutralFillDuotone, EmoteNeutralFillDuotone as EmoteNeutralFillDuotoneIcon, EmoteNeutralFillDuotone as SiEmoteNeutralFillDuotone };
export default EmoteNeutralFillDuotone;
export type { EmoteNeutralFillDuotoneProps };
