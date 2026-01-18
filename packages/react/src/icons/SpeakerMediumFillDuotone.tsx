import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerMediumFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerMediumFillDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerMediumFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.75 5.35a1 1 0 0 1 1.4.19 10.2 10.2 0 0 1-.27 12.76 1 1 0 0 1-1.54-1.28 8.2 8.2 0 0 0 .22-10.27 1 1 0 0 1 .2-1.4" />
        <path d="M15.9 7.55a1 1 0 0 1 1.4.18 7 7 0 0 1 0 8.54 1 1 0 1 1-1.59-1.22 5 5 0 0 0 0-6.1 1 1 0 0 1 .19-1.4" />
        <path fill="currentColor" d="M11.38 3.84c.98-.7 2.37 0 2.37 1.23v13.86a1.5 1.5 0 0 1-2.46 1.16l-4.83-4.03A.3.3 0 0 0 6.3 16H4c-1.24 0-2.25-1-2.25-2.25v-3.5C1.75 9.01 2.75 8 4 8h2.3q.09 0 .16-.06l4.83-4.02z" />
    </IconBase>
  ))
);

SpeakerMediumFillDuotone.displayName = 'SpeakerMediumFillDuotone';

export { SpeakerMediumFillDuotone };
export type { SpeakerMediumFillDuotoneProps };
