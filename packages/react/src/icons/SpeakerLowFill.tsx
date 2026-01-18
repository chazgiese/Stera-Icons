import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerLowFillProps = Omit<IconBaseProps, 'children'>;

const SpeakerLowFill = memo(
  forwardRef<SVGSVGElement, SpeakerLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.13 3.84c.98-.7 2.37 0 2.37 1.23v13.86a1.5 1.5 0 0 1-2.46 1.16l-4.83-4.03a.3.3 0 0 0-.16-.06h-2.3c-1.24 0-2.25-1-2.25-2.25v-3.5C3.5 9.01 4.5 8 5.75 8h2.3q.09 0 .16-.06l4.83-4.02zM17.65 7.55a1 1 0 0 1 1.4.18 7 7 0 0 1 0 8.54 1 1 0 1 1-1.59-1.22 5 5 0 0 0 0-6.1 1 1 0 0 1 .19-1.4" />
    </IconBase>
  ))
);

SpeakerLowFill.displayName = 'SpeakerLowFill';

// Triple export pattern (lucide-react style)
export { SpeakerLowFill, SpeakerLowFill as SpeakerLowFillIcon, SpeakerLowFill as SiSpeakerLowFill };
export type { SpeakerLowFillProps };
