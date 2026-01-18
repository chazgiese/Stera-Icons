import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ContrastRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContrastRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.75a9.25 9.25 0 0 1 0 18.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastRegularDuotone.displayName = 'ContrastRegularDuotone';

export { ContrastRegularDuotone };
export type { ContrastRegularDuotoneProps };
