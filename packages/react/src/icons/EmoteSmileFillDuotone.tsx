import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSmileFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSmileFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8.8 14.4a1 1 0 0 0-1.6 1.2 6 6 0 0 0 9.6 0 1 1 0 0 0-1.6-1.2 4 4 0 0 1-6.4 0m-.3-6.65a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.4 14.2a1 1 0 0 1 1.4.2 4 4 0 0 0 6.4 0 1 1 0 0 1 1.6 1.2 6 6 0 0 1-9.6 0 1 1 0 0 1 .2-1.4M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteSmileFillDuotone.displayName = 'EmoteSmileFillDuotone';

export { EmoteSmileFillDuotone };
export type { EmoteSmileFillDuotoneProps };
