# Cloud Storage Configs

```yaml
cloud_storage:
  concurrent:
  single_file_size:
  total_size:
  prefix_path:
  allow_file_suffix:
  url_file_suffix:
```

## concurrent

Upload files concurrent limit

* Default Value: `3`

## single_file_size

Upload single file size limit

* Default Value: `524288000` (500M)

## total_size

Cloud storage total size limit

* Default Value: `2147483648` (2G)

## prefix_path

OSS prefix path

* Default Value: `cloud-storage`

## allow_file_suffix

Allow upload file suffix

* Default Value: `ppt / pptx / doc / docx / pdf / png / jpg / jpeg / gif / mp3 / mp4`
