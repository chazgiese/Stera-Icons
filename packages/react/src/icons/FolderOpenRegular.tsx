import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderOpenRegularProps = Omit<IconBaseProps, 'children'>;

const FolderOpenRegular = memo(
  forwardRef<SVGSVGElement, FolderOpenRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.93 3.25c.92 0 1.78.46 2.29 1.22l.81 1.22c.23.35.62.56 1.04.56h7.08c1.43 0 2.63 1.1 2.74 2.54l.12 1.6a2 2 0 0 1 1.15 2.5l-1.76 5.3a3.75 3.75 0 0 1-3.56 2.56H4.77l-.26-.01a3.75 3.75 0 0 1-3.43-3.5L.38 6.16a2.75 2.75 0 0 1 2.75-2.92zm-2.03 8.5a.5.5 0 0 0-.47.34L3.59 17.6a1.25 1.25 0 0 0 1.23 1.65h13.02c.97 0 1.83-.62 2.13-1.54l1.77-5.3a.5.5 0 0 0-.47-.66zm-2.77-7c-.72 0-1.3.6-1.25 1.33l.63 10.03L4 11.6a2 2 0 0 1 1.9-1.36H20.5l-.1-1.35a1.25 1.25 0 0 0-1.25-1.15h-7.08c-.92 0-1.78-.46-2.29-1.22L8.97 5.3a1.3 1.3 0 0 0-1.04-.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenRegular.displayName = 'FolderOpenRegular';

export { FolderOpenRegular };
export type { FolderOpenRegularProps };
