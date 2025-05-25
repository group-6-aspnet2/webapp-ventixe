export const Get = async (apiBaseUrl, endpoint, success, error, final) => {
  await fetch(`${apiBaseUrl}/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      if (res.ok) {
        return success(await res.json());
      } else if (error) {
        res.text().then(error);
      }
    })
    .finally(() => {
      if (final) {
        final();
      }
    });
};

export const Post = async ( apiBaseUrl, endpoint, body, success, error, final) => {
  await fetch(`${apiBaseUrl}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
  .then(async (response) => {
    if (response.ok) {
      success(await response.json());
    }
    else if (error) {
      response.text().then(error);
    }
  })
    .finally(() => {
      if (final) {
        final();
      }
  });
};


/*
export const Put = async <T>(
  endpoint: string,
  body: string,
  success: (response: T) => void,
  failure: (error: string) => void,
  final?: () => void
) => {
  await fetch(`${apiBaseUrl}/${endpoint}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then(async (response) => {
      if (response.ok) {
        success(await response.json());
      } else {
        const errorMessage = await response.text();
        failure(errorMessage);
      }
    })
    .catch((_error) => {
      failure("An error occurred while processing the request.");
    })
    .finally(() => {
      if (final) {
        final();
      }
    });
};

export const Delete = async (
  endpoint: string,
  success: () => void,
  error?: () => void,
  final?: () => void
) => {
  await fetch(`${apiBaseUrl}/${endpoint}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.ok) {
        success();
      } else if (error) {
        response.text().then(error);
        error();
      }
    })
    .finally(() => {
      if (final) {
        final();
      }
    });
};
*/
