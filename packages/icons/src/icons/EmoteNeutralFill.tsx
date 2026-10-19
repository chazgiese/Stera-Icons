import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralFillProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFill = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M8.5 14.13c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zM9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralFill.displayName = 'EmoteNeutralFill';

// Triple export pattern
export { EmoteNeutralFill, EmoteNeutralFill as EmoteNeutralFillIcon, EmoteNeutralFill as SiEmoteNeutralFill };
export default EmoteNeutralFill;
export type { EmoteNeutralFillProps };
