import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type InfoCircleFillProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFill = memo(
  forwardRef<SVGSVGElement, InfoCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 10a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m0-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

InfoCircleFill.displayName = 'InfoCircleFill';

export { InfoCircleFill };
export type { InfoCircleFillProps };
