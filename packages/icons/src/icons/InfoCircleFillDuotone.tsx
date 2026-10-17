import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 9.5c-.48 0-.87.39-.87.87V16c0 .48.39.88.87.88s.88-.4.88-.88v-3.5c0-.48-.4-.87-.88-.87m0-4.5c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.63c.48 0 .88.39.88.87V16c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3.5c0-.48.39-.87.87-.87M12 7.13c.76 0 1.38.61 1.38 1.37S12.76 9.88 12 9.88s-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
    </IconBase>
  ))
);

InfoCircleFillDuotone.displayName = 'InfoCircleFillDuotone';

// Triple export pattern
export { InfoCircleFillDuotone, InfoCircleFillDuotone as InfoCircleFillDuotoneIcon, InfoCircleFillDuotone as SiInfoCircleFillDuotone };
export default InfoCircleFillDuotone;
export type { InfoCircleFillDuotoneProps };
