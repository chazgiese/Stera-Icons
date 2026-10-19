import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleFillProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFill = memo(
  forwardRef<SVGSVGElement, InfoCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 9.88c-.48 0-.87.39-.87.87V16c0 .48.39.88.87.88s.88-.4.88-.88v-3.5c0-.48-.4-.87-.88-.87m0-4.5c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37" clipRule="evenodd" />
    </IconBase>
  ))
);

InfoCircleFill.displayName = 'InfoCircleFill';

// Triple export pattern
export { InfoCircleFill, InfoCircleFill as InfoCircleFillIcon, InfoCircleFill as SiInfoCircleFill };
export default InfoCircleFill;
export type { InfoCircleFillProps };
