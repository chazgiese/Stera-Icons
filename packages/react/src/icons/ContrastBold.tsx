import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ContrastBoldProps = Omit<IconBaseProps, 'children'>;

const ContrastBold = memo(
  forwardRef<SVGSVGElement, ContrastBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 0 0 0 18z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastBold.displayName = 'ContrastBold';

export { ContrastBold };
export type { ContrastBoldProps };
