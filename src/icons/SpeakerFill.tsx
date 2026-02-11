import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerFill = memo(
  forwardRef<SVGSVGElement, SpeakerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-fill" {...props}>
      <path d="M14.63 3.84c.98-.7 2.37 0 2.37 1.23v13.86a1.5 1.5 0 0 1-2.46 1.16l-4.83-4.03a.3.3 0 0 0-.16-.06h-2.3C6.01 16 5 15 5 13.75v-3.5C5 9.01 6 8 7.25 8h2.3q.09 0 .16-.06l4.83-4.02z" />
    </IconBase>
  ))
);

SpeakerFill.displayName = 'SpeakerFill';

// Triple export pattern (lucide-react style)
export { SpeakerFill, SpeakerFill as SpeakerFillIcon, SpeakerFill as SiSpeakerFill };
export default SpeakerFill;
export type { SpeakerFillProps };
