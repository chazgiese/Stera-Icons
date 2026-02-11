import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerFillDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-fill-duotone" {...props}>
      <path d="M14.57 5.84a.25.25 0 0 1 .43.18v11.96c0 .22-.27.34-.43.18l-3.5-3.5c-.42-.42-1-.66-1.59-.66H7.25a.25.25 0 0 1-.25-.2v-3.55c0-.14.11-.25.25-.25h2.23c.6 0 1.17-.24 1.6-.66z" opacity={.4} />
        <path fillRule="evenodd" d="M13.16 4.43A2.25 2.25 0 0 1 17 6.02v11.96c0 2-2.42 3.01-3.84 1.6l-3.5-3.5a.3.3 0 0 0-.18-.08H7.25a2.25 2.25 0 0 1-2.24-2.02L5 13.75v-3.5C5 9 6 8 7.25 8h2.23q.1 0 .18-.07zM15 6.02a.25.25 0 0 0-.43-.18l-3.5 3.5c-.42.42-1 .66-1.59.66H7.25a.25.25 0 0 0-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerFillDuotone.displayName = 'SpeakerFillDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerFillDuotone, SpeakerFillDuotone as SpeakerFillDuotoneIcon, SpeakerFillDuotone as SiSpeakerFillDuotone };
export default SpeakerFillDuotone;
export type { SpeakerFillDuotoneProps };
