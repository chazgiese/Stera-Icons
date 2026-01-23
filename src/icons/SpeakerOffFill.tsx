import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerOffFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffFill = memo(
  forwardRef<SVGSVGElement, SpeakerOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-off-fill" {...props}>
      <path fill="currentColor" d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-16-16a1 1 0 0 1 0-1.4M16.82 19.65a1.5 1.5 0 0 1-2.28.44l-4.83-4.03a.3.3 0 0 0-.16-.06h-2.3C6.01 16 5 15 5 13.75v-3.5c0-.66.29-1.26.75-1.67zM14.63 3.84c.98-.7 2.37 0 2.37 1.23v9.1l-6.71-6.71 4.25-3.54z" />
    </IconBase>
  ))
);

SpeakerOffFill.displayName = 'SpeakerOffFill';

// Triple export pattern (lucide-react style)
export { SpeakerOffFill, SpeakerOffFill as SpeakerOffFillIcon, SpeakerOffFill as SiSpeakerOffFill };
export default SpeakerOffFill;
export type { SpeakerOffFillProps };
