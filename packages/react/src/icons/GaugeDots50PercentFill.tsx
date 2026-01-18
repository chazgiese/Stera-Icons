import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots50PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M7.4 15.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1 1 0 0 0-.99.85v.07q-.03.05-.04.2L10.54 8a105 105 0 0 0-.54 3.91V12a2 2 0 1 0 4-.08 105 105 0 0 0-.54-3.91l-.43-2.9-.03-.2v-.04l-.01-.02A1 1 0 0 0 12 4m-6.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.4 5.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots50PercentFill.displayName = 'GaugeDots50PercentFill';

export { GaugeDots50PercentFill };
export type { GaugeDots50PercentFillProps };
