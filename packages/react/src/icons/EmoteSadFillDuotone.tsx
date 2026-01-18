import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 12.5c-1.35 0-2.6.45-3.6 1.2a1 1 0 0 0 1.2 1.6 4 4 0 0 1 4.8 0 1 1 0 0 0 1.2-1.6c-1-.75-2.25-1.2-3.6-1.2M8.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.5c1.35 0 2.6.45 3.6 1.2a1 1 0 0 1-1.2 1.6 4 4 0 0 0-4.8 0 1 1 0 0 1-1.2-1.6c1-.75 2.25-1.2 3.6-1.2M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteSadFillDuotone.displayName = 'EmoteSadFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSadFillDuotone, EmoteSadFillDuotone as EmoteSadFillDuotoneIcon, EmoteSadFillDuotone as SiEmoteSadFillDuotone };
export type { EmoteSadFillDuotoneProps };
