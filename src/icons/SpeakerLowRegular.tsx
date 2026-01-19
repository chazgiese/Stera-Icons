import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerLowRegularProps = Omit<IconBaseProps, 'children'>;

const SpeakerLowRegular = memo(
  forwardRef<SVGSVGElement, SpeakerLowRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-low" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.84 4.6a2 2 0 0 1 3.41 1.42v11.96a2 2 0 0 1-3.41 1.42l-3.5-3.5a.5.5 0 0 0-.36-.15H5.75a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2h2.23a.5.5 0 0 0 .36-.15zm1.91 1.42a.5.5 0 0 0-.85-.36l-3.5 3.5a2 2 0 0 1-1.42.59H5.75a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h2.23a2 2 0 0 1 1.42.59l3.5 3.5c.31.31.85.09.85-.36z" clipRule="evenodd" />
        <path fill="currentColor" d="M17.8 7.75c.33-.26.8-.2 1.05.13a6.7 6.7 0 0 1 0 8.23.75.75 0 1 1-1.19-.91 5.2 5.2 0 0 0 0-6.4.75.75 0 0 1 .14-1.05" />
    </IconBase>
  ))
);

SpeakerLowRegular.displayName = 'SpeakerLowRegular';

// Triple export pattern (lucide-react style)
export { SpeakerLowRegular, SpeakerLowRegular as SpeakerLowRegularIcon, SpeakerLowRegular as SiSpeakerLowRegular };
export default SpeakerLowRegular;
export type { SpeakerLowRegularProps };
