import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type YinYangFillProps = Omit<IconBaseProps, 'children'>;

const YinYangFill = memo(
  forwardRef<SVGSVGElement, YinYangFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 0 0-5.05 17l-.28-.6-.03-.08-.1-.26-.01-.04-.16-.61-.02-.07v-.08l-.05-.23v-.09l-.03-.26v-.06l-.01-.07-.01-.3A5.75 5.75 0 0 1 12 11.25a4.25 4.25 0 0 0 0-8.5m0 12.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangFill.displayName = 'YinYangFill';

export { YinYangFill };
export type { YinYangFillProps };
