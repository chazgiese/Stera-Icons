import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffFillDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-off-fill-duotone" {...props}>
      <path d="M17 18.41v.52a1.5 1.5 0 0 1-2.46 1.15l-4.83-4.02a.3.3 0 0 0-.16-.06h-2.3C6.01 16 5 15 5 13.75v-3.5c0-1.04.7-1.91 1.66-2.17zM14.63 3.84c.98-.7 2.37 0 2.37 1.23v10.52l-7.59-7.6h.14q.09 0 .16-.05l4.83-4.03z" opacity={0.4} />
        <path fill="currentColor" d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-16-16a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

SpeakerOffFillDuotone.displayName = 'SpeakerOffFillDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerOffFillDuotone, SpeakerOffFillDuotone as SpeakerOffFillDuotoneIcon, SpeakerOffFillDuotone as SiSpeakerOffFillDuotone };
export default SpeakerOffFillDuotone;
export type { SpeakerOffFillDuotoneProps };
