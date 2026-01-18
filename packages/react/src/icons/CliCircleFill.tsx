import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CliCircleFillProps = Omit<IconBaseProps, 'children'>;

const CliCircleFill = memo(
  forwardRef<SVGSVGElement, CliCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8.2 7.8a1 1 0 1 0-1.4 1.4L9.58 12l-2.8 2.8a1 1 0 1 0 1.42 1.4l3.5-3.5a1 1 0 0 0 0-1.4zm4.8 6.7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

CliCircleFill.displayName = 'CliCircleFill';

export { CliCircleFill };
export type { CliCircleFillProps };
