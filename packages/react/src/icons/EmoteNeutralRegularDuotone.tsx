import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteNeutralRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 14.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteNeutralRegularDuotone.displayName = 'EmoteNeutralRegularDuotone';

export { EmoteNeutralRegularDuotone };
export type { EmoteNeutralRegularDuotoneProps };
