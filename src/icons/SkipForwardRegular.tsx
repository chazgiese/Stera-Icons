import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SkipForwardRegularProps = Omit<IconBaseProps, 'children'>;

const SkipForwardRegular = memo(
  forwardRef<SVGSVGElement, SkipForwardRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="skip-forward" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.88 3.09c.37-.03.71.1.99.25q.42.23 1 .61l9.44 6.07q.51.32.86.58.31.22.54.6l.05.12.06.16q.18.62-.06 1.2c-.13.32-.37.54-.6.72q-.34.25-.85.58l-9.44 6.07q-.58.38-1 .6c-.28.15-.62.3-1 .26-.5-.03-.97-.29-1.27-.7-.23-.3-.3-.66-.32-.97q-.04-.46-.03-1.17V5.93q0-.7.03-1.18c.03-.3.1-.66.32-.97l.12-.14c.3-.32.71-.52 1.15-.55m.09 1.5a.3.3 0 0 0-.16.08q-.01.02-.04.22c-.02.23-.02.55-.02 1.04v12.14a13 13 0 0 0 .06 1.26q.06.08.16.08l.2-.08q.29-.15.89-.55l9.44-6.07a11 11 0 0 0 .88-.62.3.3 0 0 0 0-.18l-.14-.13q-.21-.16-.74-.5L6.06 5.22a13 13 0 0 0-1.09-.64" clipRule="evenodd" />
        <path fill="currentColor" d="M20 3.25c.41 0 .75.34.75.75v16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SkipForwardRegular.displayName = 'SkipForwardRegular';

// Triple export pattern (lucide-react style)
export { SkipForwardRegular, SkipForwardRegular as SkipForwardRegularIcon, SkipForwardRegular as SiSkipForwardRegular };
export default SkipForwardRegular;
export type { SkipForwardRegularProps };
