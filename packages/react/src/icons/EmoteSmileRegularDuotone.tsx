import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSmileRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSmileRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.4 14.55a.75.75 0 0 1 1.2.9 5.74 5.74 0 0 1-9.2 0 .75.75 0 1 1 1.2-.9 4.24 4.24 0 0 0 6.8 0M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteSmileRegularDuotone.displayName = 'EmoteSmileRegularDuotone';

export { EmoteSmileRegularDuotone };
export type { EmoteSmileRegularDuotoneProps };
