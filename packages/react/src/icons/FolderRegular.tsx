import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderRegularProps = Omit<IconBaseProps, 'children'>;

const FolderRegular = memo(
  forwardRef<SVGSVGElement, FolderRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.93 3.25c.92 0 1.78.46 2.29 1.22l.81 1.22c.23.35.62.56 1.04.56H20A2.75 2.75 0 0 1 22.75 9v8A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V6A2.75 2.75 0 0 1 4 3.25zm-6.18 8.5V17c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25v-5.25zm1.25-7c-.69 0-1.25.56-1.25 1.25v4.25h18.5V9c0-.69-.56-1.25-1.25-1.25h-6.93c-.92 0-1.78-.46-2.29-1.22L9.97 5.3a1.3 1.3 0 0 0-1.04-.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderRegular.displayName = 'FolderRegular';

// Triple export pattern (lucide-react style)
export { FolderRegular, FolderRegular as FolderRegularIcon, FolderRegular as SiFolderRegular };
export type { FolderRegularProps };
