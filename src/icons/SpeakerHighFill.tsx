import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerHighFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerHighFill = memo(
  forwardRef<SVGSVGElement, SpeakerHighFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-high-fill" {...props}>
      <path fill="currentColor" d="M19.77 3.22a1 1 0 0 1 1.4.2A14.3 14.3 0 0 1 24 12c0 3.23-1.05 6.2-2.83 8.58a1 1 0 0 1-1.6-1.2A12.3 12.3 0 0 0 22 12c0-2.79-.91-5.34-2.43-7.38a1 1 0 0 1 .2-1.4m-10.14.62c.98-.7 2.37 0 2.37 1.23v13.86a1.5 1.5 0 0 1-2.46 1.16l-4.83-4.03a.3.3 0 0 0-.16-.06h-2.3C1.01 16 0 15 0 13.75v-3.5C0 9.01 1 8 2.25 8h2.3q.09 0 .16-.06l4.83-4.02zM17 5.35a1 1 0 0 1 1.4.2 10.2 10.2 0 0 1-.27 12.75 1 1 0 0 1-1.54-1.28 8.2 8.2 0 0 0 .22-10.27 1 1 0 0 1 .2-1.4m-2.85 2.2a1 1 0 0 1 1.4.18 7 7 0 0 1 0 8.54 1 1 0 0 1-1.59-1.22 5 5 0 0 0 0-6.1 1 1 0 0 1 .19-1.4" />
    </IconBase>
  ))
);

SpeakerHighFill.displayName = 'SpeakerHighFill';

// Triple export pattern (lucide-react style)
export { SpeakerHighFill, SpeakerHighFill as SpeakerHighFillIcon, SpeakerHighFill as SiSpeakerHighFill };
export default SpeakerHighFill;
export type { SpeakerHighFillProps };
