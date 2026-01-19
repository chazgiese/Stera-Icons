import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerHighRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerHighRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerHighRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-high-duotone" {...props}>
      <path d="M19.92 3.42a.75.75 0 0 1 1.05.15A14 14 0 0 1 23.75 12c0 3.17-1.04 6.1-2.78 8.43a.75.75 0 0 1-1.2-.9A12.5 12.5 0 0 0 22.25 12c0-2.84-.93-5.45-2.48-7.53a.75.75 0 0 1 .15-1.05" opacity={0.4} />
        <path d="M17.16 5.55a.75.75 0 0 1 1.05.14 9.96 9.96 0 0 1-.27 12.45.75.75 0 0 1-1.15-.96A8.46 8.46 0 0 0 17 6.6a.75.75 0 0 1 .15-1.05" opacity={0.4} />
        <path d="M14.3 7.75c.33-.25.8-.2 1.05.13a6.7 6.7 0 0 1 0 8.24.75.75 0 0 1-1.19-.92 5.2 5.2 0 0 0 0-6.4.75.75 0 0 1 .14-1.05" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M8.34 4.6a2 2 0 0 1 3.41 1.42v11.96a2 2 0 0 1-3.41 1.42l-3.5-3.5a.5.5 0 0 0-.36-.15H2.25a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2h2.23a.5.5 0 0 0 .36-.15zm1.91 1.42a.5.5 0 0 0-.85-.36l-3.5 3.5a2 2 0 0 1-1.42.59H2.25a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h2.23a2 2 0 0 1 1.42.59l3.5 3.5c.31.31.85.09.85-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerHighRegularDuotone.displayName = 'SpeakerHighRegularDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerHighRegularDuotone, SpeakerHighRegularDuotone as SpeakerHighRegularDuotoneIcon, SpeakerHighRegularDuotone as SiSpeakerHighRegularDuotone };
export type { SpeakerHighRegularDuotoneProps };
