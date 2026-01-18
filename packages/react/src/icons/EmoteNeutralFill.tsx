import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteNeutralFillProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFill = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8 14a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm.5-6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralFill.displayName = 'EmoteNeutralFill';

// Triple export pattern (lucide-react style)
export { EmoteNeutralFill, EmoteNeutralFill as EmoteNeutralFillIcon, EmoteNeutralFill as SiEmoteNeutralFill };
export type { EmoteNeutralFillProps };
