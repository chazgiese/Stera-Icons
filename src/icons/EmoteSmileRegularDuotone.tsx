import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSmileRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-smile-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.17 14.03a.75.75 0 1 1 1.16.94A5.6 5.6 0 0 1 12 17a5.6 5.6 0 0 1-4.33-2.03.75.75 0 1 1 1.16-.94A4 4 0 0 0 12 15.5c1.3 0 2.45-.59 3.17-1.47M9 8.38a1.38 1.38 0 1 1 0 2.75 1.38 1.38 0 0 1 0-2.76M15 8.38a1.38 1.38 0 1 1 0 2.75 1.38 1.38 0 0 1 0-2.76" />
    </IconBase>
  ))
);

EmoteSmileRegularDuotone.displayName = 'EmoteSmileRegularDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSmileRegularDuotone, EmoteSmileRegularDuotone as EmoteSmileRegularDuotoneIcon, EmoteSmileRegularDuotone as SiEmoteSmileRegularDuotone };
export default EmoteSmileRegularDuotone;
export type { EmoteSmileRegularDuotoneProps };
